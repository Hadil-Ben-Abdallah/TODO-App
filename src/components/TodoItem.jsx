import PropTypes from 'prop-types';

function TodoItem({ task, deleteTaskCallback, moveTaskUpCallback, moveTaskDownCallback }) {
    return (
        <li aria-label="task" >
            <span className="text">{task}</span>
            <button
                type="button"
                aria-label="Delete task"
                className="delete-button"
                onClick={() => deleteTaskCallback()}>
                🗑️
            </button>
            <button
                type="button"
                aria-label="Move task up"
                className="up-button"
                onClick={() => moveTaskUpCallback()}>
                ⇧
            </button>
            <button
                type="button"
                aria-label="Move task down"
                className="down-button"
                onClick={() => moveTaskDownCallback()}>
                ⇩
            </button>
        </li>
    );
}

TodoItem.propTypes = {
    task: PropTypes.string.isRequired,
    deleteTaskCallback: PropTypes.func.isRequired,
    moveTaskUpCallback: PropTypes.func.isRequired,
    moveTaskDownCallback: PropTypes.func.isRequired,
};

export default TodoItem;