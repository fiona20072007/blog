import styles from '../styles/components/PostBanner.module.scss';

const PostBanner = ({
                        title, createdAt
                    }) => {

    return (
        <div>
            {title}, {createdAt}
        </div>
    );
};

export default PostBanner;