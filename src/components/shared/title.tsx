interface TitleProps {
  title: string;
  subtitle: string;
}

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="text-denim text-3xl font-bold tracking-wider mb-3">
        {title}
      </h1>
      <p className="text-gray text-sm mb-6">{subtitle}</p>
    </>
  );
};
