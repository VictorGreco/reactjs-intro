class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { media, title, description } = this.props;
        const image = e('img', { src: media });
        const h3 = e('h3', {}, title);
        const excerpt = e('p', {}, description);
        const button = e(Button, {});

        return e('div', {}, [image, h3, excerpt, button]);
    }
}