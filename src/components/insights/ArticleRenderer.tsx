'use client';

import React from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';

interface ArticleRendererProps {
  contentEn: string;
  contentAr: string;
}

export default function ArticleRenderer({ contentEn, contentAr }: ArticleRendererProps) {
  const { language } = useLanguage();
  const rawText = language === 'en' ? contentEn : contentAr;

  // Simple, robust line/block parser for clean rendering without external heavy dependencies
  const blocks = rawText.split('\n\n');

  return (
    <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Headings (H3)
        if (trimmed.startsWith('### ')) {
          return (
            <h3
              key={idx}
              className="text-xl sm:text-2xl font-bold font-enHeading text-slate-900 mt-8 mb-4 tracking-tight border-b border-slate-100 pb-2 rtl:leading-[1.4]"
            >
              {trimmed.replace('### ', '')}
            </h3>
          );
        }

        // Headings (H2)
        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={idx}
              className="text-2xl sm:text-3xl font-bold font-enHeading text-slate-900 mt-10 mb-5 tracking-tight border-b border-slate-100 pb-3 rtl:leading-[1.3]"
            >
              {trimmed.replace('## ', '')}
            </h2>
          );
        }

        // Table Block
        if (trimmed.startsWith('|')) {
          const lines = trimmed.split('\n').map(l => l.trim()).filter(Boolean);
          if (lines.length >= 2) {
            const headerCells = lines[0].split('|').slice(1, -1).map(c => c.trim());
            const rowLines = lines.slice(2); // skip separator line

            return (
              <div key={idx} className="my-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                <table className="w-full text-left rtl:text-right border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      {headerCells.map((header, hi) => (
                        <th key={hi} className="py-3 px-4 font-bold font-enHeading text-slate-900">
                          {renderInline(header)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {rowLines.map((row, ri) => {
                      const cells = row.split('|').slice(1, -1).map(c => c.trim());
                      return (
                        <tr key={ri} className="hover:bg-slate-50/50 transition-colors">
                          {cells.map((cell, ci) => (
                            <td key={ci} className="py-3 px-4 text-slate-700">
                              {renderInline(cell)}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          }
        }

        // Unordered List
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const items = trimmed.split('\n').filter(l => l.trim().startsWith('- ') || l.trim().startsWith('* '));
          return (
            <ul key={idx} className="space-y-2.5 my-4 ps-4 sm:ps-6 list-disc list-outside text-slate-700">
              {items.map((item, ii) => (
                <li key={ii} className="leading-relaxed">
                  {renderInline(item.replace(/^[-*]\s+/, ''))}
                </li>
              ))}
            </ul>
          );
        }

        // Numbered List
        if (/^\d+\.\s+/.test(trimmed)) {
          const items = trimmed.split('\n').filter(l => /^\d+\.\s+/.test(l.trim()));
          return (
            <ol key={idx} className="space-y-2.5 my-4 ps-4 sm:ps-6 list-decimal list-outside text-slate-700 font-medium">
              {items.map((item, ii) => (
                <li key={ii} className="leading-relaxed">
                  {renderInline(item.replace(/^\d+\.\s+/, ''))}
                </li>
              ))}
            </ol>
          );
        }

        // Standard Paragraph with inline bold parsing
        return (
          <p key={idx} className="leading-relaxed rtl:leading-[1.8] text-slate-700 font-normal">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

// Inline renderer for **bold** and *italic*
function renderInline(text: string): React.ReactNode {
  // Parse **bold**
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
