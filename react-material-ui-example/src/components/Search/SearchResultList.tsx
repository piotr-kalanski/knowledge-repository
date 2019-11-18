import React from 'react';
import LearningItemCard from '../LearningItem/LearningItemCard';

const SearchResultList = (props: any) => {
    return (
        <React.Fragment>
            <LearningItemCard />
            <LearningItemCard />
        </React.Fragment>
    );
};

export default SearchResultList;