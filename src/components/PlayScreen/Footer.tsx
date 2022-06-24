export const Footer = () => {
    return (
        <footer>
            {/*
                BookMarks
                Settings  exp. lenguague etc.                
            */}
            <section>
                <article>
                    <span className="material-symbols-outlined settings">
                        settings
                    </span>
                    <p>Settings</p>
                </article>
                <article>
                    <span className="material-symbols-outlined bookmarks">
                        star
                    </span>
                    <p>Bookmarks</p>
                </article>
            </section>
        </footer>
    );
}