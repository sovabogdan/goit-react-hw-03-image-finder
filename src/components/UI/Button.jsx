import styles from "./UI.module.css";

const Button = ({ onClick, children }) => (
    <button className={styles.ButtonLoadMore} onClick={onClick} type="button">
        {children}
        Load more
    </button>
);

export default Button;