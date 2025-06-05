const BACKEND_BASE = process.env.REACT_APP_BACKEND_BASE;

export class BackendRequest {
    private method: string = '';
    private endpoint: string = '';
    private body: any = {};
    private params: string[] = [];

    constructor(route: string) {
        this.endpoint = `${BACKEND_BASE}/${route}`;
    }

    static to(route: string) {
        return new BackendRequest(route);
    }

    get() {
        this.method = 'GET';
        return this;
    }

    post(body: any) {
        this.method = 'POST';
        this.body = body;
        return this;
    }

    addParam(param : string, value : string) {
        this.params.push(`${param}=${value}`);
        return this;
    }

    async execute() {
        const queryParams = this.params.join('&');
        const fullEndpoint = queryParams ? `${this.endpoint}?${queryParams}` : this.endpoint;

        const headers = {
            method: this.method,
            'Content-Type': 'application/json',
        };

        let body: string | undefined;
        if (this.method !== 'GET' && this.body) {
            body = JSON.stringify(this.body);
            headers['Content-Type'] = 'application/json';
        }

        const response = await fetch(fullEndpoint, {
            method: this.method,
            headers,
            body,
        });

        return await response.json();
    }
}

export class ServerEvent {
    private eventSource: EventSource = new EventSource('');

    constructor(route: string) {
        this.eventSource = new EventSource(`${BACKEND_BASE}/${route}`);
    }

    static subscribe(route: string) {
        return new ServerEvent(route);
    }

    onMessage(func: any) {
        this.eventSource.onmessage = func;
    }
}