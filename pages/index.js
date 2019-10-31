import MainLayout from '../layouts/MainLayout';
const HomePage = () => {
    return (
        <MainLayout>
            <div>
                <img className='banner' src='/static/images/bg_banner.png' />
            </div>
            <div className='search-container'>
                <div className='search'>
                    <div className='search-box'>
                        <i className="fa fa-search icon"></i>
                        <input className='search-input' type='text' placeholder='Find Something' />
                    </div>
                    <div className='search-button'>
                        <button>Search</button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .banner {
                    width: 100%;
                }
                .search-container {
                    text-align: center;
                }
                .search {
                    display: inline-flex;
                    align-items: center;
                    padding: 10px 20px;
                    background-color: #eee;
                    border-radius: 8px;
                }
                .icon {
                    margin-right: 5px;
                }
                .search-box {
                    display: flex;
                    align-items: center;
                    background-color: white;
                    padding: 4px;
                    border-radius: 8px;
                    border: 1px solid #cecece;
                    margin-right: 6px;
                }
                .search-input {
                    margin: 0;
                    padding: 0;
                    font-size: 1em;
                    border: none;
                }
                .search-button button {
                    font-size: 1em;
                    border: none;
                    border-radius: 8px;
                    padding: 4px 12px;
                    margin: 0;
                    background-color: blue;
                }
            `}</style>
        </MainLayout>
    )
}

export default HomePage;