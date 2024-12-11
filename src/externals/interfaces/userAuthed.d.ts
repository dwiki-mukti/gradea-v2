

declare global {
    type typeUserAccess = {
        feature: string;
        access: number;
    }[];

    interface typeUserAuthed {
        id?: number;
        uuid?: string;
        user_id?: number;
        username?: string;
        name?: string;
        profile_type?: 'common_profiles' | 'teachers' | 'students' | 'parents';
        role_id?: number;
        access?: Record<string, {
            role?: string;
            featureAccesses: typeUserAccess
        }>
        created_at?: number;
        updated_at?: number;
    }
}

export { };