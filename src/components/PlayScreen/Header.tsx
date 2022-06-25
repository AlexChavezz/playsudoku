interface HeaderProps {
    showColors: () => void
}

export const Header = ({ showColors }: HeaderProps) => {
    return (
        <header>
            <span
                className="material-symbols-outlined palette"
                onClick={showColors}
            >
                palette
            </span>
        </header>
    );
}