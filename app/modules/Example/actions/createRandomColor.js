import randomcolor from 'randomcolor';

export default function createRandomColor({output, services, state}) {
  const ref = services.refs.next(state);
  output({
    $ref: ref,
    color: randomcolor()
  });
}
