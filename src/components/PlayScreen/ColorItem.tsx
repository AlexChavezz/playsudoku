
interface ColorItemProps {
    theme: string
}

export const ColorItem = ({ theme }:ColorItemProps) => {
    console.log(theme);
    return (
        <article
            style={{
                borderRadius: 50,
                backgroundColor: "yellow",
                height: "50px",
                width: "50px"
            }}
        >

        </article>
    );
}