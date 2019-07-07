const Node = Kumis.Node.Node;

/**
 * @memberOf Kumis.Node
 */
class Set extends Node {
    get fields() {
        return [ 'targets', 'value', 'body' ];
    }
}

module.exports = Set;
