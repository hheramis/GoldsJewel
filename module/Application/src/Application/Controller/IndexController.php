<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2013 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class IndexController extends AbstractActionController
{
    public function indexAction()
    {
        return new ViewModel();
    }
	public function aboutUsAction()
    {
        return new ViewModel();
    }
	public function productsAction()
    {
        return new ViewModel();
    }
	public function marketingPlanAction()
    {
        return new ViewModel();
    }
	public function promosAction()
    {
        return new ViewModel();
    }
	public function gemOfIdeaAction()
    {
        return new ViewModel();
    }
	public function manufacturerAction()
    {
        return new ViewModel();
    }
	public function contactUsAction()
    {
        return new ViewModel();
    }
}
