function renderSegment(segment, key) {
  if (segment.startsWith('`')) {
    return (
      <code key={key}>
        {segment.slice(1, -1)}
      </code>
    )
  }
  if (segment.startsWith('**')) {
    return <strong key={key}>{segment.slice(2, -2)}</strong>
  }
  return segment
}

export function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean)
  return parts.map((seg, i) => renderSegment(seg, i))
}