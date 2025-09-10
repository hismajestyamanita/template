import React from 'react';

const ContentBoundaryHint: React.FC = () => (
  <div className="content-boundary rounded-md p-4">
    <div className="caption">Content boundary (max 1200px)</div>
    <p className="body text-[var(--gray-700)]">Контент центрируется, имеет равномерный вертикальный gap, не выходит за границу.</p>
  </div>
);

export default ContentBoundaryHint;

