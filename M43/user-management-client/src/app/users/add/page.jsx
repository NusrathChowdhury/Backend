"use client";
import {
    Button,
    Description,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Surface,
    TextArea,
    TextField,
} from "@heroui/react";


const AddUserPage = () => {
    const onSubmit =async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const response= await fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{'Content-Type':'application'},
            body:JSON.stringify(data),
        })
      const result=await response.json()
      console.log(result)
    };
    return (
        <div>
            <h2>Add Users</h2>
            <Form onSubmit={onSubmit}>
                <Fieldset className="w-full">
                    <Fieldset.Legend>Profile Settings</Fieldset.Legend>
                    <Description>Update your profile information.</Description>
                    <Fieldset.Group>
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="John Doe" variant="secondary" />
                            <FieldError />
                        </TextField>
                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" variant="secondary" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            name="bio"
                            validate={(value) => {
                                if (value.length < 10) {
                                    return "Bio must be at least 10 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Bio</Label>
                            <TextArea placeholder="Tell us about yourself..." variant="secondary" />
                            <Description>Minimum 10 characters</Description>
                            <FieldError />
                        </TextField>
                    </Fieldset.Group>
                    <Fieldset.Actions>
                        <Button type="submit">
                            Save changes
                        </Button>
                        <Button type="reset" variant="tertiary">
                            Cancel
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
};

export default AddUserPage;