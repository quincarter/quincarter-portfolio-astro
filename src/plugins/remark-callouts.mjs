import { Parser } from 'acorn';
import { visit } from 'unist-util-visit';

const CALLOUT_TYPES = new Set(['note', 'tip', 'warning', 'danger']);
const MARKER_RE = /^\[!(NOTE|TIP|WARNING|DANGER)\]\s*/i;

const IMPORT_NAME = 'Callout';
const IMPORT_SOURCE = '@/partials/Callout.tsx';

function buildImportNode() {
	const statement = `import ${IMPORT_NAME} from '${IMPORT_SOURCE}';`;

	return {
		type: 'mdxjsEsm',
		value: statement,
		data: {
			estree: Parser.parse(statement, {
				sourceType: 'module',
				ecmaVersion: 'latest',
			}),
		},
	};
}

function hasCalloutImport(tree) {
	return tree.children.some(
		(node) => node.type === 'mdxjsEsm' && node.value.includes(IMPORT_SOURCE),
	);
}

// Turns GitHub-style alert blockquotes, e.g.
//   > [!WARNING]
//   > Be careful.
// into <Callout type="warning">Be careful.</Callout>, and auto-imports
// the Callout component so posts don't need to import it themselves.
export function remarkCallouts() {
	return (tree) => {
		let found = false;

		visit(tree, 'blockquote', (node, index, parent) => {
			if (!parent || index === undefined) {
				return;
			}

			const [firstChild] = node.children;
			if (firstChild?.type !== 'paragraph') {
				return;
			}

			const [firstText] = firstChild.children;
			if (firstText?.type !== 'text') {
				return;
			}

			const match = firstText.value.match(MARKER_RE);
			if (!match) {
				return;
			}

			const type = match[1].toLowerCase();
			if (!CALLOUT_TYPES.has(type)) {
				return;
			}

			found = true;

			// Strip the "[!TYPE]" marker from the leading paragraph, dropping the
			// paragraph entirely if the marker was the only thing in it.
			const remainder = firstText.value
				.slice(match[0].length)
				.replace(/^\n/, '');
			if (remainder) {
				firstText.value = remainder;
			} else {
				firstChild.children.shift();
			}
			const children =
				firstChild.children.length > 0 ? node.children : node.children.slice(1);

			parent.children[index] = {
				type: 'mdxJsxFlowElement',
				name: IMPORT_NAME,
				attributes: [{ type: 'mdxJsxAttribute', name: 'type', value: type }],
				children,
			};
		});

		if (found && !hasCalloutImport(tree)) {
			tree.children.unshift(buildImportNode());
		}
	};
}

export default remarkCallouts;
