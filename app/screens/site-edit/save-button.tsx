import React from 'react';
import CREATE_SITE_AND_LINK from '../../queries/create-site-and-link-mutation';
import { Mutation } from 'react-apollo';
import { Button } from 'react-native';

const SaveButton = (props: any) => {
    return (
        <Mutation
            mutation={CREATE_SITE_AND_LINK}
        >
            {(createSiteAndLink, { data }) => (
                <Button
                    title="Update"
                    onPress={() => {
                        console.log(props);
                        createSiteAndLink({
                            variables: {
                                site_name: props.site_name,
                                description: props.description,
                                image_url: props.image_url,
                                handle: "kgcoombs@gmail.com"
                            }
                        });
                    }}
                />
            )}
        </Mutation>
    )
}

// Export the component
export default SaveButton;