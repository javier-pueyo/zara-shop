'use client';

import { Input } from '@/shared/ui/Input/Input';
import { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
    resultsCount?: number;
}

export const SearchBar = ({ onSearch, placeholder = 'Search for a smartphone...', resultsCount }: SearchBarProps) => {
    const [query, setQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <div className="py-3">
            <div className="w-full relative pb-9">
                <Input
                    value={query}
                    onChange={handleChange}
                    placeholder={placeholder}
                    aria-label="Search"
                    className="w-full"
                />
                {typeof resultsCount === 'number' && (
                    <p className="absolute bottom-0 left-0 text-xs uppercase text-content-primary">
                        {resultsCount} Results
                    </p>
                )}
            </div>
        </div>
    );
};
