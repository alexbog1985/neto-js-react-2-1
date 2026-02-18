export function Toolbar({filters, selected, onSelectFilter}) {
    return (
      <>
        <div className="toolbar">
          {filters.map((filter) => (
            <button
              key={filter}
              className={filter === selected ? 'filter-button selected' : 'filter-button'}
              onClick={() => onSelectFilter(filter)}>
              {filter}
            </button>
          ))}
        </div>
      </>
    )
}