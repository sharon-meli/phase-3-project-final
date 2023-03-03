
puts "Seeding"

Patient.create([
    {
      "name": "Edd",
      "gender": "male",
      "age": 13,
      "residence": "Nakuru",
      "weight": 44

    },
    {
      "name": "vincent koech",
      "gender": "male",
      "age": 46,
      "residence": "Nakuru",
      "weight": 60
      
    },
    {
      "name": "vivian dande",
      "gender": "female",
      "age": 56,
      "residence": "Nakuru",
      "weight": "70"
      
    },
    {
      "name": "winny danvries",
      "gender": "female",
      "age": 21,
      "residence": "kiambu",
      "weight": 64
      
    }
])

departments = ["dental","surgery","cardiology","medicine"]

10.times do
  Doctor.create(
    name: Faker::Name.name,
    contact: (254700000000..254799999999).entries.sample.to_s,
    department: departments[rand((0...departments.length).entries.sample)]
  )
end

30.times do
  Appointment.create(
    date: DateTime.now,
    doctor: Doctor.find(rand(Doctor.first.id..Doctor.last.id)),
    patient: Patient.find(rand(Patient.first.id..Patient.last.id))
  )
end

puts "Done seeding"