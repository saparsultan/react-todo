import "./List.scss";

function List({ items }) {
  return (
    <ul className="todo__list">
      {items.map((item) => (
        <li className={item.active ? 'active' : ''}>
          <i className={item.color ? `badge badge--${item.color}` : ''}>
            {item.icon ? (
              item.icon
            ) : (
              ''
            )}
          </i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
