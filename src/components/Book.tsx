import clsx from 'clsx';

const getShortName = (authorName: string): string => {
  const parts = authorName.split(' ').filter((el) => el.trim());
  const lastName = parts.pop();
  return `${parts.map((p) => p[0].toUpperCase()).join('. ')}. ${lastName}`;
};

interface BookProps {
  className?: string;
  data: {
    id: string;
    authorName: string;
    title: string;
    description: string;
    pagesCount: number;
  };
}

const Book: React.FC<BookProps> = ({
  data: { authorName, title, description, pagesCount },
  className,
}) => {
  const widthPx = Math.ceil(pagesCount / 10);
  const shortAuthorName = getShortName(authorName);
  return (
    <div
      className={clsx(
        'bg-green-500 mt-5 flex justify-between items-center py-1 px-2',
        className
      )}
      style={{
        minWidth: `${widthPx}px`,
        textOrientation: 'mixed',
        writingMode: 'vertical-rl',
        fontSize: '11px',
      }}
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600">{shortAuthorName}</p>
    </div>
  );
};

export default Book;
