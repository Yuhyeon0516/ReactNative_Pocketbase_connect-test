type Location = {
    lng: number;
    lag: number;
};

export type PromiseType = {
    location: Location;
    groupId: string;
    time: Date;
    alarmTime: Date;
    trackingStartTime: Date;
    trakingEndTime: Date;
};

export type StackParams = {
    Main: undefined;
    AddPromise: undefined;
    AddGroup: undefined;
    Register: undefined;
    Login: undefined;
    WebView: {
        url: string;
        provider: string;
    };
};

export type ScreenBaseProps = {
    children: React.ReactNode;
    floatButtonShow?: boolean;
    onClickAdd?: () => void;
};

export type AuthMethodDataType = {
    beforeState: string;
    codeVerifier: string;
    code: string;
    afterState: string;
    authUrl: string;
};

export type AuthUserType = {
    token: string;
    model: {
        avatar: string;
        collectionId: string;
        collectionName: string;
        created: string;
        email: string;
        emailVisibility: boolean;
        id: string;
        nickname: string;
        updated: string;
        username: string;
        verified: boolean;
    };
};

export type GroupType = {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    groupName: string;
    maxPersonnel: number;
    currentPersonnel: number;
    attendUsers: string[];
};

export type GetAllGroupType = {
    page: number;
    perPage: number;
    totalPages: number;
    totalItems: number;
    items: GroupType[];
};
