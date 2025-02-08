import styles from './styles.module.scss';

const Button = ({ text = '', onClick, icon, style = 'gradient' }) => {
  const classNames = [styles.button];

  if (style === 'gradient') {
    classNames.push(styles.gradientButton);
  } else if (style === 'transparent') {
    classNames.push(styles.transparentButton);
  }

  return (
    <button className={classNames.join(' ')} onClick={onClick}>
      {icon && <img className={styles.icon} src={icon} alt='icon' />}
      {text}
    </button>
  );
};

export default Button;
