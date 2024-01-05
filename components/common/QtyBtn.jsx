import React from 'react'

export default function QtyBtn({onIncrease, onDecrease, qty}) {
  return (
    <div>
        <button onClick={onDecrease}>
            {qty === 1 ? "Trash" : "-"}
        </button>
        <span>
            {qty}
        </span>
        <button onClick={onIncrease}>
            +
        </button>
    </div>
  )
}
