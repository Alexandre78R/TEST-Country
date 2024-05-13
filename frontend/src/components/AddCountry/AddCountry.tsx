import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { AddCountryMutation, AddCountryMutationVariables } from "@/graphql/generated/schema";
import { ADDCOUNTRY } from "@/requetes/mutations/country.mutations";
import { useContinentsQuery } from "@/graphql/generated/schema";

export default function AddCountry () {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        emoji: "",
        code: "",
        continent: {
          id: "",
        }
    });
    const [errorMessage, setErrorMessage] = useState('');

    const { data } = useContinentsQuery({
        onCompleted(data) {
          console.log("DATA", data);
        },
        onError(error) {
          console.log("ERROR", error);
        },
      });
    
        useEffect(() => {
          console.log("DATA", data);
        },[data])

    const [addCountry] = useMutation<
    AddCountryMutation,
    AddCountryMutationVariables
    >(ADDCOUNTRY, {
        onCompleted: (data) => {
            router.reload();
        },
        onError(error) {
            setErrorMessage(error.message);
        }
    });

    const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        if (name === "continent") {
            setFormData(prevState => ({
                ...prevState,
                ["continent"]: {
                    id : value
                }
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const validateForm = () => {
        if (formData.name.trim() === '' || formData.emoji.trim() === '' || formData.code.trim() === '' || formData.continent.id.trim() === '') {
            setErrorMessage('All fields to be completed are required.');
            return false;
        }
        return true;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            addCountry({
                variables: { 
                    data: {
                        name: formData.name,
                        emoji: formData.emoji,
                        code: formData.code,
                        continent: {
                             id : +formData.continent.id
                        }
                    } },
                });
        }
    }

    return (
        <section className="form-container">
            <form className="AddCountry-form" onSubmit={handleSubmit}>
                <input name="name" value={formData.name} onChange={handleInputChange} />
                <input name="emoji" value={formData.emoji} onChange={handleInputChange} />
                <input name="code" value={formData.code} onChange={handleInputChange} />
                <select name="continent" id="pet-select" onChange={handleInputChange}>
                    <option value="">Please choose continent</option>
                    { data?.continents.map(continent => <option value={continent.id}>{continent.name}</option> )}
                </select>
                <button type="submit" className="add-button">Add</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </section>
    );
}