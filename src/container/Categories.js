import { Popover } from '@headlessui/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spoiler } from '@mantine/core';
import Carousel from 'react-multi-carousel';
import { Link } from '@reach/router';
import 'react-multi-carousel/lib/styles.css';
import Loading from '../components/Loading';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Categories({ categories, loading }) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  if (loading) {
    return (
      <Loading />
    );
  }
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div
          className="hidden lg:block lg:absolute lg:inset-0"
          aria-hidden="true"
        >
          <svg
            className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
            width={640}
            height={784}
            fill="none"
            viewBox="0 0 640 784"
          >
            <defs>
              <pattern
                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                x={118}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              y={72}
              width={640}
              height={640}
              className="text-gray-50"
              fill="currentColor"
            />
            <rect
              x={118}
              width={404}
              height={784}
              fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
            />
          </svg>
        </div>
        <Popover className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
          {() => (
            <>
              <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                    <h1>
                      <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                        {categories[randomNumber].strCategory}
                      </span>
                    </h1>

                    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
                      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        {categories[randomNumber].strCategoryDescription}
                      </p>
                    </Spoiler>
                  </div>
                  <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                    <svg
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                      width={640}
                      height={784}
                      fill="none"
                      viewBox="0 0 640 784"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                          x={118}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-gray-200"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        y={72}
                        width={640}
                        height={640}
                        className="text-gray-50"
                        fill="currentColor"
                      />
                      <rect
                        x={118}
                        width={404}
                        height={784}
                        fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                      />
                    </svg>
                    <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                      <button
                        type="button"
                        className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="sr-only">
                          Watch our video to learn more
                        </span>
                        <img
                          className="w-full"
                          src={categories[randomNumber].strCategoryThumb}
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </>
          )}
        </Popover>
      </div>
      <div className="mb-8">
        <Carousel swipeable draggable responsive={responsive} className="mb-8">
          {categories.map((category) => (
            <div className="card col-span-1 flex flex-col md:w-64 text-center rounded-lg shadow divide-y divide-gray-200" key={category.idCategory}>
              <Link to={`/categories/${category.strCategory}`}>
                <div className="flex-1 flex flex-col py-8">
                  <img className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full" src={category.strCategoryThumb} alt="" />
                  <h3 className="mt-6 text-gray-900 text-sm font-medium">{category.strCategory}</h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm">Category</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        {category.strCategory}
                      </span>
                    </dd>
                  </dl>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

Categories.defaultProps = {
  categories: [],
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
};

const mapToState = (state) => ({
  categories: state.categories.categories.categories,
  loading: state.categories.loading,
});
export default connect(mapToState)(Categories);
