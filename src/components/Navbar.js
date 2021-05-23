/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import { Popover } from '@headlessui/react';
import { connect } from 'react-redux';
import { useLocation } from '@reach/router';
import CategoryFilter from './CategoryFilter';
import { filter } from '../actions/index';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar({ filter }) {
  const handleValue = (val) => {
    filter(val);
  };

  const location = useLocation();
  return (
    <>
      <Popover
        as="header"
        className={({ open }) => classNames(
          open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
          'sticky top-0 z-50 backdrop-blur-3xl backdrop-brightness-50 bg-white bg-opacity-80 shadow-sm lg:static lg:overflow-y-visible py-4',
        )}
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="/">
                      <img
                        className="block h-8 w-auto"
                        src="https://banner2.cleanpng.com/20200416/sgv/transparent-meal-icon-coffee-shop-icon-5e98bd8fe12797.1336867015870683039223.jpg"
                        alt="Workflow"
                      />
                    </a>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  {location.href.includes('/categories/') && (
                    <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                      <div className="w-full">
                        <label htmlFor="search" className="sr-only">
                          Filter
                        </label>
                        <div className="relative">
                          <CategoryFilter onSelectHandler={handleValue} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </Popover>
    </>
  );
}

Navbar.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default connect(null, { filter })(Navbar);
