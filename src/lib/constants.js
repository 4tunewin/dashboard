/**
 * This library extracts constants from contract
 * which should applied as the context using '.bind' method.
 */

import { filter, map, fromPairs } from 'lodash';

export default function() {
    const json = this.toJSON();
    const nodes = json.ast.nodes[1].nodes;

    const constants = filter(nodes, { constant: true });

    return fromPairs(
        map(constants, constant => [constant.name, constant.value.value]),
    );
}
