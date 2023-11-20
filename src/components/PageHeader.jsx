import React from 'react';
import PropTypes from 'prop-types';  // Correct import statement
import { Link } from 'react-router-dom';

const PageHeader = ({ title, curPage }) => {
    return (
        <div className='pageheader-section'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="pageheader-content text-center">
                            <h2>{title}</h2>
                            <nav aria-label='breadcrumb'>
                                <ol className='breadcrumb justify-content-center'>
                                    <li className='breadcrumb-item'><Link to='/'>Home</Link></li>
                                    <li className='breadcrumb-item active' aria-current='page'>{curPage}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Add PropTypes validation
PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    curPage: PropTypes.string.isRequired, // Add this line
};

export default PageHeader;
