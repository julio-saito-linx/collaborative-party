/* globals systems path sync persistent */
/* eslint camelcase: 2 */
/* eslint comma-dangle: 0 */
systems({

  // //////////////////////////////////////////////
  //  rethink-db
  //  ----------
  //  RethinkDB is the open-source, scalable database that
  //  makes building realtime apps dramatically easier.
  //
  //  RethinkDB provides a web interface which lets you manage your entire server
  //  cluster, from controlling sharding and replication to running ReQL queries (in
  //  JavaScript), with editing and history support. In addition, you can perform
  //  administration tasks using scriptable ReQL commands.
  //
  //  http://rethinkdb.com/
  // //////////////////////////////////////////////

  'rethink-db': {
    // https://registry.hub.docker.com/u/library/rethink-db/
    image: {'docker': 'rethinkdb'},
    scalable: {'default': 1},
    mounts: {
      // persistent() -> Persists the files that are inside the container on
      // the path '#{system.name}/data', to an azk persistent data folder in
      // the user machine. The location the data will be saved will vary
      // between Mac and Linux
      //
      // You can check where `/data` folder is located with this command:
      // ```
      // $ azk info
      // ```
      // http://docs.azk.io/en/reference/azkfilejs/mounts.html#persistent
      '/data': persistent('#{system.name}/data')
    },
    wait: 10,
    http: {
      domains: [ '#{system.name}.#{azk.default_domain}' ]
    },
    ports: {
      http: '8080/tcp',
      rdb_28015: '28015:28015/tcp',
      rdb_29015: '29015:29015/tcp'
    },
    export_envs: {
      APP_URL: '#{azk.default_domain}:#{net.port.http}'
    }
  },

  'rethink-server': {
    depends: ['rethink-db'],
    image: {'docker': 'node'},
    provision: [
      'npm install',
    ],
    workdir: '/azk/#{manifest.dir}/#{system.name}',
    shell: '/bin/bash',
    command: ['npm', 'start'],
    wait: 20,
    mounts: {
      '/azk/#{manifest.dir}/#{system.name}': sync('#{system.name}/.'),
      '/azk/#{manifest.dir}/#{system.name}/node_modules': persistent('./#{system.name}_node_modules'),
    },
    scalable: {'default': 1},
    http: {
      domains: [ '#{system.name}.#{azk.default_domain}' ]
    },
    ports: {
      http: '3000/tcp',
    },
    envs: {
      NODE_ENV: 'dev',
      PORT: '3000',
    },
  },

  // FIXME: eslint stop working
  //        I don't want to install globally
  //        Running locally
  // 'collaborative-party': {
  //   depends: ['rethink-db'],
  //   image: {'docker': 'node'},
  //   provision: [
  //     'npm install',
  //   ],
  //   workdir: '/azk/#{manifest.dir}',
  //   shell: '/bin/bash',
  //   command: ['npm', 'start'],
  //   wait: 20,
  //   mounts: {
  //     '/azk/#{manifest.dir}': sync('.'),
  //     '/azk/#{manifest.dir}/node_modules': persistent('./node_modules'),
  //   },
  //   scalable: {'default': 1},
  //   http: {
  //     domains: [ '#{system.name}.#{azk.default_domain}' ]
  //   },
  //   ports: {
  //     http: '3000/tcp',
  //   },
  //   envs: {
  //     NODE_ENV: 'dev',
  //     PORT: '3000',
  //   },
  // },

});
