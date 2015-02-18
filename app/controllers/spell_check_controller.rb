class SpellCheckController < ApplicationController

  def index
  end

  def new
  	@sentence = Sentence.new
  end

  def check_text
   	@sentence = Sentence.create(set_params)

	escaped_string = URI.escape(@sentence.content)

  	@response = HTTParty.get("https://montanaflynn-spellcheck.p.mashape.com/check/?text=#{escaped_string}",
  		headers:{
    	"X-Mashape-Key" => "bu3l9EDJ2CmshuqpawErGALQHgOUp1aIPpSjsncs1fW50jg8RG",
    	"Accept" => "application/json"
  	})

  end

  private
  def set_params
	params.require(:post).permit(:content)
  end
end
