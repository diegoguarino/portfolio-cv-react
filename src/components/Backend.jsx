
export const Backend = () => {
    return(
        <div className="skills_content m-auto align-items-center justify-content-center">
            <h3 className="skills_title">Backend Developer</h3>
            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i className='bx bxl-php'></i>

                        <div>
                            <h5 className="skills_name">PHP</h5>
                        </div>
                    </div>

                    {/* laravel */}

                    <div className="skills_data">
                        <i className='bx bxl-nodejs'></i>

                        <div>
                            <h5 className="skills_name">Node JS</h5>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bx-cylinder'></i>
                        <div>
                            <h5 className="skills_name">MySQL</h5>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bxl-redux'></i>
                        <div>
                            <h5 className="skills_name">Redux JS</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

