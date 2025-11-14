type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`max-w-[1320px] mx-auto px-5 ${className}`}>{children}</div>
  );
};

export default Container;
