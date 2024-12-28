"use client"
import React, { useState } from "react";
import dynamic from "next/dynamic";

interface Option {
    value: string;
    label: string;
}

const Select = dynamic(() => import("react-select"), { ssr: false });

export default function Filters() {
    const [selectedType, setSelectedType] = useState<Option | null>(null);
    const [selectedSpecialty, setSelectedSpecialty] = useState<Option | null>(null);

    // Opções para o filtro de tipo de unidade
    const typeOptions: Option[] = [
        { value: "clinicas", label: "Clínicas" },
        { value: "hospitais", label: "Hospitais" },
    ];

    // Opções para o filtro de especialidades
    const specialtyOptions: Option[] = [
        { value: "cardiologia", label: "Cardiologia" },
        { value: "dermatologia", label: "Dermatologia" },
        { value: "ortopedia", label: "Ortopedia" },
        { value: "ginecologia", label: "Ginecologia" },
    ];

    // Estilos personalizados para o react-select
    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            height: "44px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#038C7F",
            boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.2)"
        }),
        dropdownIndicator: (provided: any) => ({
            ...provided,
            padding: "4px",
        }),
        clearIndicator: (provided: any) => ({
            ...provided,
            padding: "4px",
        }),
        menu: (provided: any) => ({
            ...provided,
            fontSize: "16px",
        }),
        singleValue: (provided: any) => ({
            ...provided,
            fontSize: "16px",
        }),
        placeholder: (provided: any) => ({
            ...provided,
            fontSize: "17px",
            color: "#FFFFFF",
            fontWeight: "400",
        }),
    };

    return (
        <div className="filters">
            <div className="filter">
                <Select
                    value={selectedType}
                    options={typeOptions}
                    placeholder="Tipo"
                    isSearchable={false}
                    styles={customStyles}
                />
            </div>
            <div className="filter">
                <Select
                    value={selectedSpecialty}
                    options={specialtyOptions}
                    placeholder="Especialidade"
                    isSearchable={false}
                    styles={customStyles}
                />
            </div>
        </div>
    );
}
