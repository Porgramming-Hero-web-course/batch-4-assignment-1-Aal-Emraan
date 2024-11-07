{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = (obj1: Profile, obj2: Partial<Profile>) : Profile => {
        const updatedProfile = {...obj1, ...obj2};
        return updatedProfile
    }
}