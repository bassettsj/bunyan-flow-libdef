// @flow
import Bunyan from 'bunyan';
const logger = Bunyan.createLogger({ name: 'logger' });

logger.trace('Foobar');

logger.trace();

logger.trace()
// $ExpectError;
const r: RegExp = logger.trace();
logger.trace();

logger.trace(new Error('asdf'));

// $ExpectError
logger.trace('foo', new Error('foo'));


logger.trace({ err: new Error('foobar') }, 'error');

// $ExpectError
logger.trace('error', { num: true });

// $ExpectError
const num = logger.trace();

// $ExpectError
const n: number = num;

Bunyan.
