const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-4 w-1/4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
      {children}
    </div>
  );
};

export default Card;
