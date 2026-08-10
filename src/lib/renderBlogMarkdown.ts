import { createMarkdownProcessor } from '@astrojs/markdown-remark';

let processorPromise: Promise<Awaited<ReturnType<typeof createMarkdownProcessor>>> | null = null;

export async function renderBlogMarkdown(content: string) {
  if (!processorPromise) {
    processorPromise = createMarkdownProcessor({
      syntaxHighlight: false,
    });
  }
  const processor = await processorPromise;
  return processor.render(content);
}
