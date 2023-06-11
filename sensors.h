class DHTsensor{
    private:
        int DHTpin;
    public:
        float readTemp(int DHTpin);
        float readHum(int DHTpin);
}