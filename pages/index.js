import MainLayout from '../layouts/MainLayout';
const HomePage = () => {
    return (
        <MainLayout>
            <img className='banner' src='/static/images/bg_banner.png' />
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
                <div className='ads-container'>
                    <div className='ads-block'>
                        <h3>Storage</h3>
                        <p className='text-mute'>
                            Keep your product data into database
                        </p>
                    </div>
                    <div className='ads-block'>
                        <h3>Accessible</h3>
                        <p className='text-mute'>
                            The product information can be easily accessed by anyone
                        </p>
                    </div>
                    <div className='ads-block'>
                        <h3>Data Analytics</h3>
                        <p className='text-mute'>
                            Any information can be used to analysed for further using
                        </p>
                    </div>
                </div>
                <div className='divider'>
                    <hr/>
                </div>
            </div>
            <style jsx>{`
                .banner {
                    width: 100%;
                }
                .search-container {
                    text-align: center;
                    margin-top: -25px;
                }
                .search {
                    display: inline-flex;
                    align-items: center;
                    padding: 10px 20px;
                    background-color: rgb(248, 251, 251);
                    border-radius: 8px;
                    position: relative;
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
                    margin-right: 6px;
                }
                .search-input {
                    margin: 0;
                    padding: 0;
                    font-size: 1em;
                    border: none;
                    font-weight: 300;
                }
                .search-button button {
                    font-size: 1em;
                    border: none;
                    border-radius: 8px;
                    padding: 4px 12px;
                    margin: 0;
                    background-color: #00BBD3;
                    color: white;
                }
                .content {
                    height: 500px;
                    background-color: gray;
                }
                .ads-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 20%;
                }
                .ads-block {
                    text-align: center;
                    padding: 0 20px;
                    border-right: 1px solid #707070;
                    margin-top: 20px;
                }
                .ads-block:last-child {
                    border-right: none;
                }
                .divider {
                    padding: 10px 15%;
                    color: #707070;
                }
                .text-mute {
                    color: #7C7C7C;
                    font-weight: 300;
                }
            `}</style>
        </MainLayout>
    )
}

export default HomePage;