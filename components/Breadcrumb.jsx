import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();

  // Pisah URL berdasarkan slash dan buang yang kosong
  const paths = location.pathname.split('/').filter(Boolean);

  return (
    <nav className="text-sm breadcrumbs my-4 md:px-5">
      <ol className="list-reset flex text-gray-600 space-x-1">
        <li>
          <Link to="/dashboard" className="text-blue-600 hover:underline">Home</Link>
        </li>
        {paths.map((path, index) => {
            const isSecondLast = index >= paths.length - 2;
            
            const routeTo = '/' + paths.slice(0, index + 1).join('/');

            return (
                <li key={index} className="flex items-center space-x-1">
                <span className="mx-2">/</span>
                {isSecondLast ? (
                    <span className="text-gray-500 capitalize">{decodeURIComponent(path)}</span>
                ) : (
                    <Link to={routeTo} className="text-blue-600 hover:underline capitalize">
                    {decodeURIComponent(path)}
                    </Link>
                )}
                </li>
            );
            })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
