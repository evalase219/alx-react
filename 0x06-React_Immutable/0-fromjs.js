// Convert objects to immutable form
import { fromJS } from './node_modules/immutable/dist/immutable';

export default function getImmutableObject(object) {
  return fromJS(object);
}