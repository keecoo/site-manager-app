import React, { Component } from 'react';
import USER_UPDATE from '../../queries/user-update-mutation';
import { graphql, Mutation } from 'react-apollo';
import { Button, Keyboard } from 'react-native';

const SaveButton = (props: any) => {
    return (
        <Mutation
            mutation={USER_UPDATE}
        //update={(cache, { data: { insert_todos } }) => {
        //fix this crap
        // const data = cache.readQuery({ query: FETCH_TODOS });
        // const newTodo = {
        //     task: props.task,
        //     completed: false,
        //     user_id: props.userId,
        //     id: insert_todos.returning[0].id
        // }
        // data.todos.push(newTodo);
        // cache.writeQuery({ query: FETCH_TODOS, data })
        //}}
        >
            {(updateUser, { data }) => (
                <Button
                    title="Update"
                    onPress={() => {
                        console.log(props);
                        updateUser({
                            variables: {
                                first_name: props.first_name,
                                last_name: props.last_name,
                                phone: props.phone,
                                handle: "Madalyn61"
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