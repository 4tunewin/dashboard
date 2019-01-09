/**
 * Re-export configuration based on current environment
 */

import { merge } from 'lodash';

import development from './config.dev';
import production from './config.prod';
import staging from './config.stage';

const env = process.env.NODE_ENV || 'development';

export default merge({ development, staging, production }[env]);
