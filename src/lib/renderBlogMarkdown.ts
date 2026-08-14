import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import type { RehypePlugin } from '@astrojs/markdown-remark';

const wrapTablesPlugin: RehypePlugin = () => {
  return (tree: any) => {
    const wrap = (node: unknown): unknown => {
      if (Array.isArray(node)) {
        return node.map(wrap);
      }
      if (node && typeof node === 'object') {
        const n = node as { type: string; tagName?: string; children?: unknown[] };
        if (n.type === 'element' && n.tagName === 'table') {
          return {
            type: 'element',
            tagName: 'div',
            properties: { class: 'table-scroll' },
            children: [node],
          };
        }
        if (Array.isArray(n.children)) {
          n.children = n.children.map(wrap);
        }
      }
      return node;
    };
    tree.children = tree.children.map(wrap);
  };
};

let processorPromise: Promise<Awaited<ReturnType<typeof createMarkdownProcessor>>> | null = null;

export async function renderBlogMarkdown(content: string) {
  if (!processorPromise) {
    processorPromise = createMarkdownProcessor({
      syntaxHighlight: false,
      rehypePlugins: [wrapTablesPlugin],
    });
  }
  const processor = await processorPromise;
  return processor.render(content);
}
