class ApplicationController < Sinatra::Base
    get '/patientDetails' do
        Patient.all.to_json
    end

    get '/patientDetails/:search' do
        Patient.where("name LIKE :query", query: "%#{params[:search]}%").to_json
    end                              

    post '/patientDetails' do
        Patient.create(params).to_json
    end
    patch '/patientDetails/:id' do
        Patient.find(params[:id]).update(params)
        Patient.find(params[:id]).to_json
    end
    delete '/patientDetails/:id' do
        Patient.destroy(params[:id])
        Hash.new.to_json
    end
    get '/doctors' do
        Doctor.all.to_json
    end
    get '/doctors/:id' do
        Doctor.find(params[:id]).to_json
    end

    get '/appointments' do
        Appointment.all.to_json(include: [:doctor, :patient])
    end
    get '/doctor/:id' do
        Doctor.find(params[:id]).to_json(include: [:patients])
    end

    delete '/appointments/:id'  do
        Appointment.destroy(params[:id])
    end
end