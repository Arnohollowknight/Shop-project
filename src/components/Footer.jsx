function Footer() {
    return (
        <footer className='page-footer blue accent-4'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/Arnohollowknight/Shop-project#'
                        rel='noreferrer'
                        target='_blank'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
