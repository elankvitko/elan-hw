get '/' do
  redirect '/home'
end

get '/home' do
  erb :'index'
end

get '/code' do
  code = ""

  File.open( File.expand_path( __FILE__ ), "r" ) do | f |
    f.each_line do | line |
      code << line
    end
  end

  content_type :json
  { code: code }.to_json
end
